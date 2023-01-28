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

  const handleSetCookie = async () => {
    const res = await fetch('http://localhost:3000/api/test/cookie-test').then((res) => res.json());
    console.log('❗res', res);
  };
  const handleCheckCookie = async () => {
    const res = await fetch('http://localhost:3000/api/cookie-test2').then((res) => res.json());
    console.log('❗res', res);
  };

  const handleRun = () => runCmd();

  return (
    <>
      <h1>Run server command</h1>
      <Button variant={'contained'} onClick={handleRun}>
        Run
      </Button>
      <br />
      <br />
      <Button variant={'contained'} onClick={handleSetCookie}>
        Send cookie deeper
      </Button>{' '}
      &nbsp;&nbsp;&nbsp;
      <Button variant={'contained'} onClick={handleCheckCookie}>
        Check cookie
      </Button>
      <br />
      <br />
      <div>
        <textarea style={{ width: 500, height: 300 }} value={log} />
      </div>
    </>
  );
}
