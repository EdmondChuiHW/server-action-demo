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
        <form action={genSubmitEditWithRedirect}>
          <pre>
            {`
"use server";

setBag("Last updated via redirect");

redirect("/account");
            `}
          </pre>
          <button>Submit with redirect</button>
        </form>
      </section>

      <hr />
      <section>
        <form action={genSubmitEditWithRevalidatePath}>
          <pre>
            {`
"use server";

setBag("Last updated via revalidate path");

revalidatePath("/account");
            `}
          </pre>
          <button>Submit with revalidatePath</button>
        </form>
      </section>

      <hr />
      <section>
        <form action={genSubmitEditWithoutAnything}>
          <pre>
            {`
"use server";

setBag("Not seen until hard-nav");
            `}
          </pre>
          <button>Submit without anything</button>
        </form>
      </section>
      <hr />
    </>
  );
}
