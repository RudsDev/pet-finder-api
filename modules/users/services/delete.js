module.exports = (Repo, ServiceAdress, ServicePet) => async (id) => {
	try {
		const user = await Repo.getById(id)
		await Repo.delete(id)
		if (user) {
			await ServiceAdress.delete(user.id_adress)
		}
	} catch (error) {
		throw error
	}
}
