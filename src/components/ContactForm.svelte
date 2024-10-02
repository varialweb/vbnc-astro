<script>
  let loading = false
  let sent = false
  let error = false
  
  async function handleSubmit(event) { 
    const formData = new FormData(event.target)
    loading = true


    console.log('formData', formData.get('name'))
    
    const request = await fetch('/contact', { method: 'POST', body: formData })
    const response = await request.json()

    loading = false

    if (response.success) sent = true

    console.log('response', response)
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-white max-w-xl rounded p-5 py-10 grid gap-5">
  <h2 class="text-center">Recovery is Just a Step Away</h2>
  <label for="name">
    Name
    <input id="name" name="name" placeholder="John Doe" required />
  </label>
  <label for="email">
    Email
    <input id="email" name="email" type="email" placeholder="someone@domain.com" required />
  </label>
  <label for="phone">
    Phone
    <input id="phone" name="phone" placeholder="(555) 555-5555" />
  </label>
  <label for="comments">
    Questions or Comments
    <textarea id="comments" name="comments" placeholder="I need help with..." rows="4" />
  </label>
  {#if sent}
    <p class="text-center">Successfully sent!</p>
  {:else}
    <button 
    class="border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] hover:text-white text-center px-1 lg:px-24 py-4 rounded-full lg:w-fit lg:mx-auto font-bold text-lg"
  >
    {#if loading}Sending...{:else}Submit{/if}
  </button>
  {/if}
  
</form>