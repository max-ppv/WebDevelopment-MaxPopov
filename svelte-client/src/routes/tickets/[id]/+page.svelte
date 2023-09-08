<h1>Ticket Details</h1>

<div class="ticket">
  <h2>{data.firstName} {data.lastName}</h2>
  <p><strong>Employee ID:</strong> {data.employeeID ? data.employeeID : 'N/A'}</p>
  <p><strong>Email:</strong> {data.email}</p>
  <p><strong>Problem Type:</strong> {data.problemType}</p>
  <p><strong>Problem:</strong> {data.problem}</p>
  <p><strong>Status:</strong> {data.resolved}</p>
</div>

<script>
  export let data;
  console.log(data, 'data');
</script>
