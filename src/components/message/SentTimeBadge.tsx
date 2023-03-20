import defaultPic from "../../assets/Default_pfp.png";

const SentTimeBadge = () => {
  return (
    <div className="flex flex-col">
      <img className="h-5 rounded-full" src={defaultPic} />
      <p className="text-sm">just now</p>
    </div>
  );
};

export default SentTimeBadge;
