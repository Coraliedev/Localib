import "./cardinfos.css";

interface CardsInfosProps {
  entity?: string;
  entityInfos?: (string | undefined | number)[][];
}
export const CardInfos: React.FC<CardsInfosProps> = ({
  entity,
  entityInfos,
}) => {
  return (
    <div className="cardinfos">
      {entity && (
        <div>
          <div>
            {entityInfos?.map((info, index) => (
              <p key={index}>
                <>
                  <span>{info[0]}</span>
                </>
                : <>{info[1]}</>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
