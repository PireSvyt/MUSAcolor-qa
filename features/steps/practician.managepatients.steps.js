const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { PracticianManagePatient } = require("../objects/practician.managepatients.object.js")

const practicianManagePatient = new PracticianManagePatient

// Modal
Then("patient modal shall be visible", async () => {
	await practicianManagePatient.assertPatientModalIsVisible()
})
Then("patient modal shall be hidden", async () => {
	await practicianManagePatient.assertPatientModalIsHidden()
})

// Clicks
When ("I click new patient icon of my patients", async () => {
	await practicianManagePatient.clickNewPatientCallToAction()
})
When ("I click proceed button of the patient modal", async () => {
	await practicianManagePatient.clickNewPatientProceedCallToAction()
})
When ("I click close button of the patient modal", async () => {
	await practicianManagePatient.clickNewPatientCloseCallToAction()
})
When ("I click the patient tile of {string}", async (input) => {
	await practicianManagePatient.clickPatientCallToAction(input)
})
When ("I click patient menu of {string}", async (input) => {
	await practicianManagePatient.clickPatientMenuCallToAction(input)
})
When ("I click delete patient from patient menu of {string}", async (input) => {
	await practicianManagePatient.clickPatientDeleteCallToAction(input)
})
When ("I click proceed button of the delete patient confirmation modal", async () => {
	await practicianManagePatient.clickPatientDeleteConfirmCallToAction()
})

// Inputs
When("I fill name of patient modal with {string}", async function (input) {
	await practicianManagePatient.fillName(input)
})

// States
Then("{string} shall be part of my patients", async (input) => {
	await practicianManagePatient.assertIsOneOfMyPatients(input)
})
Then("{string} shall not be part of my patients", async (input) => {
	await practicianManagePatient.assertIsNotOneOfMyPatients(input)
})
Then("I shall be on patient page for {string}", async (input) => {
	await practicianManagePatient.assertIAmOnThisPatientPage(input)
})
Then ("duplicated patient name warning shall be visible", async () => {
	await practicianManagePatient.assertDuplicatedNameIsVisible()
})

// Reductions
Given("I create a patient named {string}", async (input) => {
	await practicianManagePatient.clickNewPatientCallToAction()
	await practicianManagePatient.fillName(input)
	await practicianManagePatient.clickNewPatientProceedCallToAction()
})
Given("I delete a patient named {string}", async (input) => {
	await practicianManagePatient.clickPatientMenuCallToAction(input)
	await practicianManagePatient.clickPatientDeleteCallToAction(input)
	await practicianManagePatient.clickPatientDeleteConfirmCallToAction()
})
