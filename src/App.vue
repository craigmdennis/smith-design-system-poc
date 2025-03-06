<script setup>
</script>

<template>
  <main>
    <BContainer>
      <BRow>
        <BCol>
          <div class="mt-3">
            <BButtonGroup aria-label="Basic example">
              <BButton>Default (Secondary)</BButton>
              <BButton variant="primary">Primary</BButton>
              <BButton variant="link">Link</BButton>
            </BButtonGroup>
          </div>
          <div class="mt-3">
            <BButtonGroup>
              <BButton variant="success">Success</BButton>
              <BButton variant="info">Info</BButton>
              <BButton variant="warning">Warning</BButton>
            </BButtonGroup>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </main>
</template>