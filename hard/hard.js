function createPII() {
    let PII = {
      name: "John Doe",
      SSN: "123-45-6789"
    };
  
    return {
      getName: function() {
        return PII.name;
      }
    };
  }

  const userPII = createPII();