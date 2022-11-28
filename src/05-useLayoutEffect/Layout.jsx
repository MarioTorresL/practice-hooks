
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <div className="container">
        <h1 className="mt-3">BreakingBad Quotes</h1>
        <hr />

        {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>}
        <button
          className="btn btn-primary"
          onClick={() => increment()}
          disabled={isLoading}
        >
          Next quote
        </button>
      </div>
    </>
  );
};
