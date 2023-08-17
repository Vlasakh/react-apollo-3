import { useMemo, useState } from 'react';
import { useMutation } from '@apollo/client';
import { RUN_CMD } from '../../query/runCmd';
import useDeepCompareEffect from './useDeepCompareEffect';

export function UseDeepEffectTest() {
  const [count, setCount] = useState(0);
  const [counterObj, setCounterObj] = useState({ firstCount: 0 });
  const [secondObj, setSecondObj] = useState({ secCount: 0 });

  useDeepCompareEffect(() => {
    console.log('counterObj', [count], counterObj, secondObj);
  }, [counterObj]);

  const handleIncreaseCounter = () => setCount((count) => count + 1);
  const handleIncreaseFirstCounter = () => setCounterObj(({ firstCount }) => ({ firstCount: firstCount + 1 }));
  const handleIncreaseSecondCounter = () => setSecondObj(({ secCount }) => ({ secCount: secCount + 1 }));

  console.log('❗rerender');
  return (
    <>
      <div>Counter: {count}</div>
      <div>{JSON.stringify(counterObj, null, 2)}</div>
      <div>{JSON.stringify(secondObj, null, 2)}</div>
      <br />
      <div>
        <button onClick={handleIncreaseCounter}>counter + 1</button>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <button onClick={handleIncreaseFirstCounter}>inc 1</button>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <button onClick={handleIncreaseSecondCounter}>inc II</button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button onClick={() => setCounterObj({ ...counterObj })}>ForceUpdate</button>
      </div>
    </>
  );
}
