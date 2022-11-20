import React from 'react'
import { useParams } from 'react-router-dom';

function TestPage() {
    const { workspace } = useParams();
    console.log(workspace)
  return (
    <p>현재 페이지의 파라미터는 { workspace } 입니다.</p>
  )
}

export default TestPage