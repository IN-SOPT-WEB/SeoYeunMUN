import { Link } from "react-router-dom";
//GET 통신으로 받아오기 api import 해도 되고 뭐 상관 무
//Search에 state값 전해주기(api에서 받아온거 같이 전해줘도 상관 무고.. 근데 가능할지는 미지수)
function Profile() {
  return <Link to="/search/{}"></Link>;
}
export default Profile;
