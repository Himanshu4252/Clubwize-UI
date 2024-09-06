import { clamp } from 'lodash';

interface Props{
    text: string;
    maxLines: number
}

const TruncatedText = ({ text, maxLines }: Props) => {
    return (
      <p
        className="overflow-hidden text-ellipsis"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: maxLines,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </p>
    );
  };
  
  export default TruncatedText;