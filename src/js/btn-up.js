.scroll-item{
    width: 100%;
    height: 100%;
    fill: #85a279;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(270deg);
}
.btn-up {
    position: fixed;
    background-color: #f8d24e;
    right: 20px;
    bottom: 20px;
    border-radius: 22px;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border: none;
  }
  
  .btn-up::before {
    content: "";
    text-align: center;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 12px;
    top: 12px;
  }
  .btn-up_hide {
    display: none;
  }
  
  .bounce-out-down {
    animation: bounce-out-down 2s ease infinite;
  }
  @keyframes bounce-out-down {
    0% { transform: translateY(1); }
    20% {
      opacity: 1;
      transform: translateY(-20px);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
  .bounce-out-down:hover{
    animation: blocks-main .5s forwards;
  }
