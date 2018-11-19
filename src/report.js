import React from 'react';
import {useTopState} from 'top-state-hook';

export default function Report() {
  const [red] = useTopState('color.red');
  const [green] = useTopState('color.green');
  const [blue] = useTopState('color.blue');
  const [favFlavor] = useTopState('favoriteFlavor');
  const [favColor] = useTopState('user.favoriteColor');
  const [comment] = useTopState('feedback.comment');

  return (
    <div>
      <div>Red: {String(red)}</div>
      <div>Green: {String(green)}</div>
      <div>Blue: {String(blue)}</div>
      <div>Favorite Flavor: {favFlavor}</div>
      <div>Favorite Color: {favColor}</div>
      <div>Comment: {comment}</div>
    </div>
  );
}
