import InspirationalQuotes from '../../static/InspirationalQuotes.json';

// type Props = { TODO: Make quote genre specific
//   genre?: string;
// };
export const WelcomeQuote = () => {
  const { quote, author } = InspirationalQuotes?.inpiration
    ? InspirationalQuotes.inpiration[
        Math.round(Math.random() * InspirationalQuotes.inpiration.length)
      ]
    : { quote: '', author: '' };

  return (
    <div className="flex flex-col items-end">
      <div className="my-12 text-4xl italic font-bold">{quote}</div>
      <div className="text-3xl">{`- ${author}`}</div>
    </div>
  );
};
