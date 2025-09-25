/**
 * Update Health model query .
 * @param _id The UUID string representing the entity in the Health model.
 * @param data The data to update.
 */
export async function updateHealthEntry(_id: string, data: unknown) {
  // return client.health.update({
  //   where: { id },
  //   data,
  // });
  return data;
}
