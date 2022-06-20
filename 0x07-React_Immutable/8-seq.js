import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
	student.firstName.charAt(0).toUpperCase();
	return student.score > 70;
  });

  function capitalFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
	JSObject[key].firstName = capitalFirstLetter(JSObject[key].firstName);
	JSObject[key].lastName = capitalFirstLetter(JSObject[key].lastName);
	return JSObject[key];
  });

  console.log(JSObject);
}
