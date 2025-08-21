<script>
    export let data;
</script>
<h2 class="mb-4">Lista de Usuarios</h2>

<table class=" table table-striped table-hover">
    <thead>
        <tr>
            
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Ciudad</th>
            <th>latitud</th>
        </tr>
    </thead>
    <tbody>
        {#each data.usuarios as usuario}
            <tr>
                
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.address.city}</td>
                <td>{usuario.address.geo.lat}</td>
            </tr>
        {/each}
    </tbody>    
</table>