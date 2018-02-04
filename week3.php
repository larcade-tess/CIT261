<!DOCTYPE HTML>
<html>
<body>
  <main>
    <div class='list'>
      <?php
      $items = $_SESSION['items'];
      $count = count($items);
      for ($i = 0; $i < $count; $i++) {
        $itemDiv = "<div class = 'list'>";
        $itemDiv .= "  <div> Item: </div>";
        $itemDiv .= "  <div>" . $items[$i] . "</div>";
        $itemDiv .= "  <div><input type='button' value='Delete' onclick='removeItem(" . $items[$i] . ")'></div>";
        $itemDiv .= "</div>";
        echo $itemDiv;
      }
      ?>
    </div>
  </main>
</body>
</html>