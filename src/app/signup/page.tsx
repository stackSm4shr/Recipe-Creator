import { SignUp } from '@stackframe/stack';

export default function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp
        fullPage={true}
        automaticRedirect={true}
        firstTab="password"
        extraInfo={
          <>
            By signing up, you agree to our <a href="/terms">Terms</a>
          </>
        }
      />
    </div>
  );
}