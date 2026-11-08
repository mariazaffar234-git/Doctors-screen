
function Button() {

    const handleOnClick=(e) => {
        e.preventDefault();
        console.log("you are registered");
    }
  return (
    <button className="btn" type="button" name="button" onClick={handleOnClick}>
      Register
    </button>
  );
}