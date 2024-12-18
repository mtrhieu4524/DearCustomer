<script lang="ts">
	import customers from '../assets/customer.json';
	import * as Dialog from "$lib/components/ui/dialog/index.js";
</script>

<!-- header -->

	<div ><div class="flex h-36 items-center bg-neutral-800 px-5 py-5" ><p class="text-9xl font-serif font-bold text-white opacity-90">Dear customers</p></div>

	<div class=" h-screen bg-gradient-to-b from-neutral-800 to-neutral-100 pt-14">
		<div class="p-5 gap-5 grid grid-cols-4" >
			{#each customers as customer}<div class=" bg-slate-50/80 px-3 py-3 rounded-md border-black border-2 border-opacity-20" id={customer.id}><p class="font-bold text-2xl">{customer.name}</p><p class="opacity-50">{customer.point} {customer.point === 1 ? 'point' : 'points'}</p><div><Dialog.Root>
				<Dialog.Trigger class="bg-zinc-700 py-2 px-3 rounded-md hover:bg-slate-800 float-end mt-3 text-white ">Detail</Dialog.Trigger>
				<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title class="text-3xl mb-4 text-center">Customer Detail</Dialog.Title>
					<Dialog.Description class="space-y-5 text-xl" >
					<p>Name: {customer.name}</p>
					<p>Age: {customer.age}</p>
					<p>Point: {customer.point}</p>
					<p>Phone Number: {customer.phone}</p>
					<p>City : {customer.city}</p>
					</Dialog.Description>
				</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root></div></div>{/each}
		</div>
	</div></div>
