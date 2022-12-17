import { useMemo } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import { RUN_CMD } from '../../query/runCmd';

export function RunCmd() {
  const [runCmd, { data }] = useMutation(RUN_CMD);
  const log = useMemo(() => {
    if (!data) return 'Press `Run`';

    try {
      return JSON.stringify(JSON.parse(data.value.body), null, 2);
    } catch (e) {
      return 'Error parsing response from server';
    }
  }, [data]);

  const handleRun = () => runCmd();

  return (
    <>
      <h1>Run server command</h1>

      <Button variant={'contained'} onClick={handleRun}>
        Run
      </Button>
      <br />
      <br />

      <div>
        <textarea style={{ width: 500, height: 300 }} value={log} />
      </div>
    </>
  );
}
