import { useCallback, useMemo, useRef, useState } from 'react';

interface useMutationPromiseOptions<V> {
  onCompleted?: (result: V) => void;
  onError?: (result: unknown) => void;
}

type useMutationPromiseCall<T, U> = (params: T) => Promise<U | void>;
type useMutationPromiseStateReturn<U> = { loading: boolean; data?: U };

export function useMutationPromise<T, U>(
  promiseCallback: (params: T) => Promise<U>,
  options?: useMutationPromiseOptions<U>,
): [
  useMutationPromiseCall<T, U>,
  useMutationPromiseStateReturn<U> & {
    clearState: () => void;
  },
] {
  const [state, setState] = useState<useMutationPromiseStateReturn<U>>({
    loading: false,
  });
  const callbackRef = useRef(promiseCallback);
  const optionsRef = useRef(options);

  callbackRef.current = promiseCallback;

  const call: useMutationPromiseCall<T, U> = useCallback(async params => {
    setState(prev => ({ ...prev, loading: true }));

    let result: U | undefined;

    try {
      result = await callbackRef.current(params);

      const onCompleted = optionsRef.current?.onCompleted;

      if (onCompleted) {
        onCompleted(result);
      }
      return result;
    } catch (error) {
      const onError = optionsRef.current?.onError;

      if (onError) {
        onError(error);
      }
    } finally {
      setState(prev => ({ ...prev, loading: false, data: result }));
    }
    return;
  }, []);

  const clearState = useCallback(
    () => setState(prev => ({ ...prev, data: undefined })),
    [],
  );

  const returnState = useMemo(
    () => [
      call,
      Object.assign(state, {
        clearState,
      }),
    ],
    [clearState, state, call],
  ) as any;

  return returnState;
}
