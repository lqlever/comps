import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return ( 
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
      <Button secondary>
        <GoDatabase />
        Buy now!
      </Button>
      </div>
      <div>
        <Button warning rounded>
          Deals
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Test
        </Button>
      </div>
      <div>
        <Button danger>
          Cars
        </Button>
      </div>
    </div>
  )
};

export default ButtonPage;

