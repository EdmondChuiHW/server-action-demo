'use client'

export default function MyClientComp({ myServerAction }) {

    const handleSubmit = async () => {
        await myServerAction()
    }

    return(
        <section>
            <h2>Submit with redirect</h2>
            <ul>
                <li>Redirects upon response</li>
                <li>Updates soft-nav server values</li>
                <li>Updates hard-nav server values</li>
            </ul>
            <pre>
          {`
  "use server";

  setBag("Last updated via redirect from client component");

  redirect("/account");
            `}
        </pre>
            <form action={handleSubmit}>
                <button>Submit with redirect, client side form</button>
            </form>
        </section>
    )
}