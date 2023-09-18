import { revalidatePath } from "next/cache";
import { setBag } from "../../../lib/bag";
import { redirect } from "next/navigation";

async function genSubmitEditWithRedirect() {
  "use server";

  setBag("Last updated via redirect");

  redirect("/account");
}

async function genSubmitEditWithRevalidatePath() {
  "use server";

  setBag("Last updated via revalidate path");

  revalidatePath("/account");
}

async function genSubmitEditWithoutAnything() {
  "use server";

  setBag("Not seen until hard-nav");
}

export default function EditPage() {
  return (
    <>
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

setBag("Last updated via redirect");

redirect("/account");
            `}
        </pre>
        <form action={genSubmitEditWithRedirect}>
          <button>Submit with redirect</button>
        </form>
      </section>

      <hr />
      <section>
        <h2>Submit with revalidatePath</h2>
        <ul>
          <li>Does not redirect upon response</li>
          <li>Updates soft-nav server values</li>
          <li>Updates hard-nav server values</li>
        </ul>
        <pre>
          {`
"use server";

setBag("Last updated via revalidate path");

revalidatePath("/account");
            `}
        </pre>
        <form action={genSubmitEditWithRevalidatePath}>
          <button>Submit with revalidatePath</button>
        </form>
      </section>

      <hr />
      <section>
        <h2>Submit without anything</h2>
        <ul>
          <li>Does not redirect upon response</li>
          <li>Does not update soft-nav server values</li>
          <li>Updates hard-nav server values</li>
        </ul>
        <pre>
          {`
"use server";

setBag("Not seen until hard-nav");
            `}
        </pre>
        <form action={genSubmitEditWithoutAnything}>
          <button>Submit without anything</button>
        </form>
      </section>
      <hr />
    </>
  );
}
