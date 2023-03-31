import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="App">
      <div>
        <Button primary>
          <GoBell />
          Click
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Me!
        </Button>
      </div>
      <div>
        <Button outline success>
          Testing
        </Button>
      </div>
      <div>
        <Button warning>Children</Button>
      </div>
      <div>
        <Button danger outline>
          Prop
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
