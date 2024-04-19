import { Form } from "./components/Form";
import { FormInput } from "./components/FormInput";
import { Submit } from "./components/Submit";

function App() {
  return (
    <div>
      <Form>
        <FormInput label="Nome" />
        <FormInput label="Email" type="email" placeholder="example@host.com" />
        <FormInput label="Senha" type="password" placeholder="" />
        <Submit>Submit</Submit>
      </Form>
    </div>
  );
}

export default App;
