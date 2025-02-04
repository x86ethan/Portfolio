<?php
$output = shell_exec('cd $HOME/sites/ethan-robert.xyz &&  git pull origin master 2>&1');
mail('ethan-robert@ik.me', 'Déploiement automatique', $output);
?>
