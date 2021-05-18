'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '吉', '凶', '中吉', '末吉', '大凶'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}