import Link from "next/link";

function Footer() {
  return (
    <div className="flex  w-screen justify-center gap-10 bottom-0 z-999 my-12">
      <Link
        style={{ marginTop: "4px", color: "black" }}
        href="https://github.com/kwonkwonn/kwang-connection"
      >
        깃허브{" "}
      </Link>
      <Link
        style={{ marginTop: "4px", color: "black" }}
        href="https://etherscan.io/"
      >
        컨트랙트{" "}
      </Link>
      <Link style={{ marginTop: "4px", color: "black" }} href={"/"}>
        구경
      </Link>
      <Link style={{ marginTop: "4px", color: "black" }} href={"/"}>
        가입방법
      </Link>
      <Link style={{ marginTop: "4px", color: "black" }} href={"/"}>
        문의
      </Link>
      <Link style={{ marginTop: "4px", color: "black" }} href={"/"}>
        메일
      </Link>
    </div>
  );
}

export default Footer;
