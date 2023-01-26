export const getDateDiff = (state) => {
  const diffDate = state[0].endDate.getTime() - state[0].startDate.getTime();

  return Math.ceil(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};

export const convertQueryDate = (date) => {
  return date.getFullYear() + '-' + (1 + date.getMonth()) + '-' + date.getDate();
};

export const convertDateKr = (props) => {
  return new Intl.DateTimeFormat('kr').format(props);
};
export function period(props) {
  let start = props.startDate;
  let end = props.endDate;
  let now = new Date();
  let ret = '';
  if (start.getFullYear() !== now.getFullYear()) {
    ret += start.getFullYear() + '년 ' + (1 + start.getMonth()) + '월 ' + start.getDate() + '일';
  } else if (start.getFullYear() === now.getFullYear()) {
    ret += 1 + start.getMonth() + '월 ' + start.getDate() + '일';
  }
  ret += '~';
  if (start.getFullYear() !== end.getFullYear()) {
    ret += end.getFullYear() + '년 ' + (1 + end.getMonth()) + '월 ' + end.getDate() + '일';
  } else if (start.getMonth() === end.getMonth()) {
    ret += end.getDate() + '일';
  } else {
    ret += 1 + end.getMonth() + '월 ' + end.getDate() + '일';
  }
  return ret;
}
export function convertDate(props) {
  let start = props;
  let now = new Date();

  let ret = '';
  if (start.getFullYear() !== now.getFullYear()) {
    ret += start.getFullYear() + '년 ' + 1 + start.getMonth() + '월 ' + start.getDate() + '일';
  } else if (start.getFullYear() === now.getFullYear()) {
    ret += 1 + start.getMonth() + '월 ' + start.getDate() + '일';
  }
  return ret;
}
