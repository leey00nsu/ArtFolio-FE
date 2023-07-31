import { useEffect, useState } from "react";
import { useAnimationStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { postNewArtPiece } from "../../api/artPiece.api";
import { uploadArtPieceImage } from "../../api/artPiece.api";
import DetailCarousel from "../detail/detailContent/DetailCarousel";
import { BsFillImageFill } from "react-icons/bs";
import { userId } from "../../mocks/dummyUser";

const NewArtPieceContent = () => {
  const { showAnimation, hideAnimation } = useAnimationStore();
  const navigate = useNavigate();
  const [artPieceTitle, setArtPieceTitle] = useState("");
  const [artPieceContent, setArtPieceContent] = useState("");
  const [artPieceFile, setArtPieceFile] = useState<FileList | null>(null);
  const [artPieceImages, setArtPieceImages] = useState<string[]>([]);

  // 이미지 파일이 변경되면 이미지 파일을 base64로 인코딩하여 artPieceImages에 저장합니다.
  useEffect(() => {
    if (artPieceFile) {
      [...artPieceFile].forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setArtPieceImages((prev) => [...prev, String(reader.result)]);
        };
      });
    }
  }, [artPieceFile]);

  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtPieceTitle(e.target.value);
  };

  const onContentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setArtPieceContent(e.target.value);
  };

  const onFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArtPieceFile(e.target.files);
    }
  };

  // 작품 등록 버튼을 누르면 작품 정보를 서버에 먼저 전송합니다.
  // 작품 정보를 서버에 전송하고 정상적으로 등록되면 응답으로 작품 id를 받아옵니다.
  // 등록된 작품 id를 받아온 후 이미지를 해당 작품 id에 저장합니다.
  // API가 두 개로 나뉘어져 있으므로 , 요청이 두 번 발생합니다.
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    showAnimation("loading");

    if (artPieceFile) {
      try {
        const response = await postNewArtPiece({
          title: artPieceTitle,
          content: artPieceContent,
          artistId: userId,
        });

        const artPieceId = response.data;
        try {
          await uploadArtPieceImage({
            artistId: userId,
            artPieceId: artPieceId,
            files: artPieceFile,
          });
          navigate(-1);
        } catch (e) {
          console.log("이미지 업로드 중 오류 발생");
          // 이미지 업로드에 실패하면 작품을 삭제합니다.
          // await deleteArtPiece({ artPieceId: artPieceId, artistId: userId });
        } finally {
          hideAnimation();
        }
      } catch (e) {
        console.log("작품 등록 중 오류 발생");
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col mt-10 items-center gap-4 mb-10"
    >
      <div>
        <h1 className="text-2xl font-bold">새로운 작품 등록하기</h1>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">작품명</span>
        </label>
        <input
          type="text"
          value={artPieceTitle}
          onChange={onTitleChangeHandler}
          placeholder="작품명을 입력해주세요"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">작품 내용</span>
        </label>
        <textarea
          value={artPieceContent}
          onChange={onContentChangeHandler}
          className="textarea textarea-bordered h-24"
          placeholder="작품 내용을 입력해주세요"
          required
        ></textarea>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">파일을 선택해주세요</span>
        </label>
        <input
          multiple
          onChange={onFileChangeHandler}
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full max-w-xs"
          required
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">미리보기</span>
        </label>
        {artPieceImages.length > 0 ? (
          <DetailCarousel photoPaths={artPieceImages} />
        ) : (
          <div className="w-full h-[300px] bg-slate-200 flex justify-center items-center">
            <BsFillImageFill size={24} />
          </div>
        )}
      </div>

      <button className="btn">등록하기</button>
    </form>
  );
};

export default NewArtPieceContent;
