import React, { ReactElement, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import EmptyDetail from "./EmptyDetail";
import BoardDetail from "./BoardDetail";
import BoardSmall from "./BoardSmall";

const tempData = [
  {
    champion: "Bard",
    author: "osunguk",
    createdAt: "2020.04.01 18:35",
    updatedAt: "2020.04.05 20:11",
    title: "바드 1000판 노하우 공개",
    description: "감전 바드로 원딜보다 딜 많이 하는 방법",
    skills: [
      "평 Q 로 감전을 바로 터트린다",
      "유지력싸움, 이속증가",
      "단축키 사용으로 빠르게 탄다",
      "전령을 무효화할 수 있는 유일한 스킬",
    ],
    play: [
      "e 라는 아주 좋은 생존기가 있기 때문에 신출귀몰하며 로밍으로 게임을 푼다",
      "미니언 뒤에 있으면 속박을 조심하고, 차원문은 위험해보이면 타지 않는다",
    ],
    etc: "로밍 갔을 때 원딜보고 항상 죽지말라고 말해두자",
  },
  {
    champion: "Ahri",
    author: "osunguk",
    createdAt: "2020.04.01 18:35",
    updatedAt: "2020.04.05 20:11",
    title: "안녕하세요 아립니다",
    description: "궁만 있으면 누구든지 원콤",
    skills: [
      "돌아오는 Q 를 신경쓴다",
      "미니언 먹을 때 편하다",
      "최대한 기다리다가 써야 적중률이 높아진다",
      "도주기로만 쓰면 안된다",
    ],
    play: [
      "궁의 빠른 속도로 합류와 어그로 핑퐁이 중요",
      "매혹만 신경써서 피하면 딜로스가 많이 생긴다",
    ],
    etc: "미니언 푸쉬가 느리기 때문에 라인을 빠르게 민다는 마인드",
  },

  {
    champion: "Yuumi",
    author: "신당동핵주먹",
    createdAt: "2020.04.14 18:35",
    updatedAt: "2020.04.15 20:11",
    title: "라면 먹으면서 플레 가기",
    description: "",
    skills: [
      "우리팀 원딜이 라인을 밀 때 Q로 상대 원딜 견제를 한다",
      "쿨타임일 때는 내리면 안됨",
      "원딜이 약하면 선마하는 편이야",
      "선제 공격보다는 팀원의 다른 궁과 연계해서 쓰자",
    ],
    play: [
      "상대 스킬이 빠졌을 때 내려서 평타를 쳐서 마나관리를 한다 ",
      "CC기 걸리면 즉사니까 한타에서는 갈아탈 때도 조심조심",
    ],
    etc: "집사가 시원찮으면 미련 없이 버린다",
  },
];

const GET_ALL_POST = gql`
  {
    readAllPosts {
      id
      champion
      title
      description
      skills
      play
      etc
      author
      createdAt
      updatedAt
    }
  }
`;
function BoardShow(props: any): ReactElement {
  const [CurrentBoard, setCurrentBoard] = useState({});
  const [BoardList, setBoardList] = useState([]); // todo : 서버에서 데이터 받아와야한다
  const getAllPostQuery = useQuery(GET_ALL_POST);

  useEffect(() => {
    // console.log(getAllPostQuery.data.readAllPosts);
    console.log(getAllPostQuery);

    const dataList = getAllPostQuery?.data?.readAllPosts;
    if (dataList) {
      const result = dataList.map((el: any) => {
        return {
          ...el,
          skills: JSON.parse(el.skills),
          play: JSON.parse(el.play),
        };
      });
      // console.log(result);
      setBoardList(result);
    }
  }, [getAllPostQuery]);

  const clickWriteBtn = () => {
    props.history.push("/board/write");
  };

  return (
    <div className="user-board">
      <div className="detail-view">
        {Object.keys(CurrentBoard).length > 0 ? (
          <BoardDetail data={CurrentBoard} />
        ) : (
          <EmptyDetail />
        )}
      </div>
      <div className="list-view">
        <div className="btn-wrapper">
          <button
            onClick={clickWriteBtn}
            className="creat-meta-btn"
            type="button"
          >
            create meta
          </button>
        </div>
        <div className="label">Recent</div>
        <div className="content-list">
          {BoardList.map((el) => {
            return <BoardSmall data={el} setCurrentBoard={setCurrentBoard} />;
          })}
        </div>
        <div className="label">Popular</div>
        <div className="content-list">
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
        <div className="label">Recommend</div>
        <div className="content-list">
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(BoardShow);
