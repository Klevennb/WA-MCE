import InspirationalQuotes from '../../static/InspirationalQuotes.json';

type Props = {
  genre?: string;
};
export const WelcomeQuote = (props: Props) => {
  const { quote, author } = InspirationalQuotes?.inpiration
    ? InspirationalQuotes.inpiration[
        Math.round(Math.random() * InspirationalQuotes.inpiration.length)
      ]
    : { quote: '', author: '' };

  return (
    <div className="flex justify-center">
      <div>
        <div className="my-12 text-5xl italic font-bold">{quote}</div>
        <div className="text-3xl">{`- ${author}`}</div>
      </div>
    </div>
  );
};
