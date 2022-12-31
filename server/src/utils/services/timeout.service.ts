import { v4 as uuid } from 'uuid';

type TimeoutStateKey = 'highlightedProduct';

interface Timeout {
  id: string;
  key: TimeoutStateKey;
  time: number;
  interval: NodeJS.Timeout;
}

class TimeoutService {
  state: Timeout[];
  constructor() {
    this.state = new Array<Timeout>();
  }

  setGlobalTimeout(key: TimeoutStateKey, time: number, func: any) {
    const id = uuid();

    const deleteFromState = (id: string) => {
      this.state = this.state.filter((item) => item.id !== id);
    };

    const repeated = this.state
      .filter((item) => item.key === key)
      .sort((a, b) => a.time - b.time);

    const set = () => {
      const interval = setTimeout(() => {
        deleteFromState(id);
        func();
      }, time);

      this.state.push({ id, key, time, interval });
    };

    if (!repeated.length) return set();

    if (repeated[0].time < time + 3000) {
      clearInterval(repeated[0].interval);
      deleteFromState(repeated[0].id);
    }
    return set();
  }
}

export const timeoutService = new TimeoutService();
