import { CURRENCIES } from "../utils/constants";

export const ProductCard = ({
  title,
  cpu,
  ram,
  storage,
  bandwidth,
  price,
  id,
  location,
  features
}: any) => {
  return (
    <div onClick={() => alert(title)}>
      <h3>{title}</h3>
      <p>{cpu}</p>
      <p>{ram}</p>
      <p>{storage}</p>
      <p>{bandwidth}</p>
      <p>{price}{CURRENCIES}</p>
      {features.map((infos) => {
        <div>{infos}</div>
      })}
    </div>
  );
};
