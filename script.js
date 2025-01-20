document.getElementById("searchButton").addEventListener("click", () => {
  const doctorName = document.getElementById("doctorName").value;
  const location = document.getElementById("location").value;

  if (!doctorName || !location) {
    alert("Please select both a doctor and a location.");
  } else {
    alert(`Searching for ${doctorName} in ${location}...`);
    // Add your search logic here
  }
});
