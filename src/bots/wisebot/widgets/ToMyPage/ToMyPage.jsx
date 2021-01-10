import React from "react";
import { Redirect } from 'react-router-dom';

const ToMyPage = ({ mainCat, setState }) => {
  return (
		<Redirect to='/mypage' />
  );

}

export default ToMyPage;
