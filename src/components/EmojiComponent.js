import { useState } from "react";
import { Tooltip } from 'reactstrap';

const Emoji = ({emoji, description, keywords}) => {
  const [showCopied, setShowCopied] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleClick = e => {
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 3000)
  }

  return (
    <div className="emoji"      
      id={emoji}
      onClick={handleClick}
      data-clipboard-text={emoji}
      data-keywords={keywords}
    >
      <Tooltip placement="right" isOpen={tooltipOpen} target={emoji} toggle={toggle}>
        { showCopied ? 
          <span className="text-success">Copied To Clipoard ! 📋</span>:
          <span className="text-light">Copy To Clipboard! 📋</span>
        }
      </Tooltip>
      <span role="img" aria-label={description}>{emoji}</span>
    </div>
  );
}

export default Emoji;
