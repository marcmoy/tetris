import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import $ from 'jquery';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const screen = document.getElementById('screen');

  const renderGame = e => {
    e.preventDefault();
    $("#start-screen").addClass("hidden");
    $("#power-switch").removeClass("off").addClass("on");
    $("#power-light").removeClass("off").addClass("on");
    ReactDOM.render(<Root store={store} />, screen);
  };

  $("#start-button").on("mousedown touchstart", (e) => {
    renderGame(e);
  });

  $(window).on("keydown", (e) => {
    if (e.keyCode === 13) renderGame(e);
  });

});
