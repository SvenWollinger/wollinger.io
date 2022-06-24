<?php
    println("Ensuring composer...");
    if(!execute("composer require rosell-dk/webp-convert")) {
        println("Error installing webp-convert!");
        exit;
    }
    println("Composer installed!\n");

    use WebPConvert\WebPConvert;

    println("Cleaning build directory...");
    deleteFolder("build");

    println("\nStarting build...");
    mkdir("build");
    copyFolder("src/resources/", "build");
    createPage("contact.php", "index");

    println("\nConverting images...");
    convertWebp("build/img/");

    if($argc != 1 && $argv[1] == "run")
        shell_exec("php -S 127.0.0.1:80 -t build/");
?>

<?php

    function createPage($pageFile, $name) {
        $output = shell_exec("php src/template.php " . $pageFile);
        $htmlFile = fopen("build/" . $name . ".html", "w");
        fwrite($htmlFile, $output);
        fclose($htmlFile);
    }

    function println($message) {
        echo $message . "\n";
    }

    function execute($command) {
        $returnVal;
        exec($command, $ignore, $returnVal);
        return $returnVal == 0;
    }

    function fixSlashes($string) {
        return (DIRECTORY_SEPARATOR === '\\') ? str_replace('/', '\\', $string) : str_replace('\\', '/', $string);
    }

    function shouldConvertWebp($file) {
        switch(pathinfo($file)['extension']) {
            case "jpg":
            case "png": return true;
        }
        return false;
    }
    
    function convertWebp($folder) {
        $it = new RecursiveDirectoryIterator($folder, RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            if(!is_dir($file) && shouldConvertWebp($file)) {
                $destination = str_replace(pathinfo($file)["extension"], "", $file) . ".webp";
                $options = [];
                WebPConvert::convert($file, $destination, $options);
            }
        }
    }

    function copyFolder($folder, $dest) {
        $it = new RecursiveDirectoryIterator($folder, RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            if(!is_dir($file)) {
                //$file in this case contains src/resources/ which we want to cut out using str_replace
                $newFile = $dest . DIRECTORY_SEPARATOR . str_replace(fixSlashes($folder), "", fixSlashes($file));
                makedir($newFile);
                copy($file, $newFile);
            }
        }
    }

    function makedir($folder) {
        $dirName = dirname($folder);
        if(!file_exists($dirName))
            mkdir($dirName, 0777, true);
    }

    function deleteFolder($folder) {
        if(!file_exists($folder)) return;

        $it = new RecursiveDirectoryIterator($folder, RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
        foreach($files as $file) {
            $path = $file->getRealPath();
            is_dir($path) ? rmdir($path) : unlink($path);
        }
        rmdir($folder);
    }
?>