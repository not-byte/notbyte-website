export function mailToSelfTemplate(validatedFields: any): string {
  return `
    <p>From: ${validatedFields.data.email} (${validatedFields.data.name})</p>
    <p>${validatedFields.data.message}</p>
    `;
}