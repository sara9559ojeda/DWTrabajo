<script>
    import { onMount } from 'svelte';   
    import { goto } from '$app/navigation';
	import { user } from '../../stores/auth';

    let currentUser = {
        name: '',
        email: '',
        loged: false
    };

    onMount(() => {
        const unsubscribe = user.subscribe(value => {
            currentUser = value;
            if (!currentUser.loged) {
                goto('/login');
            }
        });

        return () => unsubscribe();
    });
</script>

<h1>Holaaaa</h1>
