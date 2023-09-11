// This is a postman automated test script 

// Fetch details of a person by name 
pm.test('Status code is 200', function(){
    pm.response.to.have.status(200);
});

pm.test('To contain person object in json as response', function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData);
})

// Add a new person
pm.test('Status code is 201', function(){
    pm.response.to.have.status(201);
});

pm.test('To contain person object in json as response', function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData);
})


// test to update the person details in the database
pm.test('Status code is 200', function(){
    pm.response.to.have.status(200);
});

pm.test('To contain message property in json as response', function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql('Successfully updated');
});

pm.test('To contain newPerson property in json as response', function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData.newPerson);
});

// test to delete person from database
pm.test('Status code is 200', function(){
    pm.response.to.have.status(200);
});

pm.test("Contains a message property", function() {
    let jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Person deleted");
})