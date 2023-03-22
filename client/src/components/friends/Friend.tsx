import defaultPic from "../assets/Default_pfp.png";

const Friend = () => {
  return (
    <div /* className="w-full h-10 flex border border-gray-500 mt-0.5" */>
      <img src={defaultPic} />
      <h1>Pavel Novák</h1>
    </div>
  );
};

export default Friend;
