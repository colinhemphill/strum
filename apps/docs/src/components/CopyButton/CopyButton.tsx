import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/sharp-solid-svg-icons';
import { Box, Button, Tooltip } from '@strum/react';
import { default as copy } from 'copy-to-clipboard';
import React from 'react';
import { copyButtonStyle } from './CopyButton.css';

type CopyButtonProps = {
  content: string;
};

type State = {
  copied: boolean;
};

const initialState = {
  copied: false,
};

const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [state, setState] = React.useState<State>(initialState);

  const onClick = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setState((x) => ({ ...x, copied: false }));
    }

    copy(content, {
      format: 'text/plain',
    });

    setState((x) => ({ ...x, copied: true }));
    timeoutRef.current = setTimeout(
      () => setState((x) => ({ ...x, copied: false })),
      2000,
    );
  }, [content]);

  return (
    <Box className={copyButtonStyle} position="absolute">
      <Tooltip color="neutral" content="Copy to clipboard">
        <Button
          color={state.copied ? 'success' : 'neutral'}
          onClick={onClick}
          size="small"
        >
          {state.copied ? (
            <>
              <FontAwesomeIcon fixedWidth icon={faCheck} />
            </>
          ) : (
            <>
              <FontAwesomeIcon fixedWidth icon={faCopy} />
            </>
          )}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default CopyButton;
