import { useEffect, useState } from "react";
import FeedsIndividual from "./feedsModule/FeedIndividual";

function FeedsBrowser() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<feedList[]>([]);

  async function fetchData() {
    setLoading(true);
    try {
      const data = await fetch("http://localhost:3002/posts");
      const res = await data.json();
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {posts.map((el) => {
          return (
            <div className="w-inherit cursor-pointer" key={`${el.index}`}>
              {<FeedsIndividual dataList={el} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedsBrowser;
