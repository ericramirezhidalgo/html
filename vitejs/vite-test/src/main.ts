import { z } from "zod";

const form = document.getElementById("simple-form") as HTMLFormElement;

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  const result = schema.safeParse(data);
  if (result.success) {
    alert("Form submitted successfully!");
  } else {
    alert(
      "Validation failed: " +
        result.error.errors.map((e) => e.message).join(", ")
    );
  }
});
